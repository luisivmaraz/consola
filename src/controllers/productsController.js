import producDAO from "../dao/productsDao.js";

const C = console.log.bind(console.log)


export const getAllProducts=(req,res)=>{
    producDAO.getAll()
    .then(result=>{
        res.json(result)
    })
    .catch(err=>console.error(err))
};

export const getOneProduct=(req,res)=>{
    producDAO.getOne(req.params.barcode)
    .then(result=>{ 
        if(result!=null){
        res.json(result)
        }else{
            res.json({
                status:"Product not found "
            })
        }
    })
    .catch(err=>res.json({
        status:"Server unavailable"
    }))
}

export const insertProduct=(req,res)=>{
producDAO.insertProduct(req.body)
.then(result=>{
    if(result){
        res.json({
            status:"Product saved"
        })
    }
})
.catch(err=>{
    res.json({
        status:"Server unavailable"
    })
})
}

export const updateProduct=(req,res)=>{
    producDAO.updateProduct(req.params.barcode,req.body)
    .then(result=>{
        if(result){
            res.json({
                status:"Product updated"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}

export const deleteProduct=(req,res)=>{
    producDAO.deleteProduct(req.params.barcode)
    .then(result=>{
        if(result){
            res.json({
                status:"Product deleted"
            })
        }
    })
    .catch(err=>{
        res.json({
            status:"Server unavailable"
        })
    })
}
