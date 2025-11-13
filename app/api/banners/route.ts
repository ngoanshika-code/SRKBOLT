import { NextRequest, NextResponse } from "next/server"
import { getCollection } from "@/lib/mongodb"

const MAX_BANNERS = 3

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get("page") || "home"
    
    const collection = await getCollection("banners")
    const banners = await collection
      .find({ page })
      .sort({ order: 1, createdAt: -1 })
      .limit(MAX_BANNERS)
      .toArray()

    return NextResponse.json(banners)
  } catch (error) {
    console.error("Error fetching banners:", error)
    return NextResponse.json({ error: "Failed to fetch banners" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection("banners")

    const existingCount = await collection.countDocuments()
    if (existingCount >= MAX_BANNERS) {
      return NextResponse.json({ error: "Maximum of 3 banners allowed" }, { status: 400 })
    }

    const body = await request.json()

    const title = typeof body.title === "string" ? body.title.trim() : ""
    const image = typeof body.image === "string" ? body.image.trim() : ""

    if (!title || !image) {
      return NextResponse.json({ error: "Title and image are required" }, { status: 400 })
    }

    const subtitle = typeof body.subtitle === "string" ? body.subtitle.trim() : ""
    const highlight = typeof body.highlight === "string" ? body.highlight.trim() : ""
    const page = typeof body.page === "string" ? body.page.trim() : "home"

    const rawOrder = body.order
    let order = Number.isFinite(rawOrder) ? Number(rawOrder) : existingCount
    if (rawOrder !== undefined && rawOrder !== null && rawOrder !== "") {
      const parsedOrder = Number(rawOrder)
      if (Number.isNaN(parsedOrder)) {
        return NextResponse.json({ error: "Order must be a number" }, { status: 400 })
      }
      order = parsedOrder
    }

    const banner = {
      title,
      subtitle,
      highlight,
      image,
      order,
      page,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    const result = await collection.insertOne(banner)

    return NextResponse.json({ ...banner, _id: result.insertedId }, { status: 201 })
  } catch (error) {
    console.error("Error creating banner:", error)
    return NextResponse.json({ error: "Failed to create banner" }, { status: 500 })
  }
}
