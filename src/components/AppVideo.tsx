"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { ListBlobResultBlob, list } from "@vercel/blob";
import NextVideo from 'next-video';


function AppVideo({ fileName }: { fileName: string }) {
    const [videoList, setVideoList] = useState<ListBlobResultBlob[]>([])
    useEffect(() => {
        getVideoData()
    }, [])

    async function getVideoData() {
        // const response = await list();
        // const data = await response.json();
        // setVideoList(data.blobs);
    }

    const url = useMemo(() => {
        if (videoList.length === 0) {
            return ""
        }
        const { url } = videoList.find(video => video.pathname === fileName) || { url: '' }
        console.log(url)
        return url
    }, [videoList])

    return (
        <NextVideo src={url} />
    )
}

export default AppVideo