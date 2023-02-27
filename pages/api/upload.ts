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
        form.parse(req,(err,fields,files)=>{
            if( Array.isArray( files.image ) ) return 
            const image = files.image
            const data = fs.readFileSync(image.filepath)
            fs.writeFileSync(`./public/uploads/${image.originalFilename}`, data)
        })
        res.status(201).send("")
    }
    else {
        res.status(404).send("")
    }
}
export default handler