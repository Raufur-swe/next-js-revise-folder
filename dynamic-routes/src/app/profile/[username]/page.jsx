import React from 'react'

async function page({ params }) {
    const {username} =  await params
    return (
        <div>this is dynamic routes <br />
            name : {username}
        </div>
    )
}

export default page