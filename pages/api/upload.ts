import { NextApiRequest, NextApiResponse } from "next";
import formidable from 'formidable'
import fs from 'fs'

export const config = {
    api: {
        bodyParser: false,
    }
}

const handler = (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    if(req.method === 'POST' ) {
        const form = new formidable.IncomingForm()
        let url = "./"
        form.parse(req,(err,fields,files)=>{
            if( Array.isArray( files.image ) ) return 
            const image = files.image
            const data = fs.readFileSync(image.filepath)
            url = `./public/uploads/${image.originalFilename}`
            fs.writeFileSync( url, data)
            res.status(201).json({filename:image.originalFilename})
        })
        // res.status(404).json({})
    }
    else {
        res.status(404).json({})
    }
}
export default handler