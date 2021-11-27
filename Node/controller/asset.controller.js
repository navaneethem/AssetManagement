const assetdao= require('../dao/asset.dao');

var assetController={
    addAsset: addAsset,
    findAssets: findAssets,
    findAssetById:findAssetById,
    updateasset:updateasset,
    deleteById: deleteById
};

function addAsset(req,res){
    let asset= req.body;
    assetdao.create(asset)
    .then((data) => {
        res.send(data)
    })
    .catch( error =>{
        console.log(error);
    });
}

function findAssetById(req,res){
    assetdao.findById(req.params.am_id)
    .then((data) =>{
        res.send(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function deleteById(req,res){
    assetdao.deleteById(req.params.am_id)
    .then((data)=>{
        res.status(200).json({
            message:"Deleted Successfully",
            asset: data
        })
    })
    .catch(error =>{
        console.log(error);
    });
}

function updateasset(req,res){
    assetdao.updateasset(req.body, req.params.am_id)
    .then((data)=>{
        res.status(200).json({
            message: "Updated Successfully",
            asset: data
        })
    })
    .catch(error => {
        console.log(error);
    })
}

function findAssets(req,res){
    assetdao.findAll()
    .then( data =>{
        res.send(data);
    })
    .catch(error =>{
        console.log(error)
    })
}

module.exports= assetController;
