const Asset = require("../models/Assets");

var assetdao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateasset: updateasset,
};

function findAll() {
  return Asset.findAll();
}
function deleteById(am_id) {
    return Asset.destroy({ where: { am_id: am_id } });
  }
  
function findById(am_id) {
  return Asset.findByPk(am_id);
}


function create(asset){
    var newasset= new Asset(asset)
    return newasset.save();
}

function updateasset(asset,am_id){
    var updateasset= {
        am_model: asset.am_model,
        am_snumber:asset.am_snumber,
        am_myyear: asset.am_myyear,
        am_pdate: asset.am_pdate,
        am_warranty:asset.am_warranty,
        am_from:asset.am_from,
        am_to:asset.am_to
        }
    return Asset.update(updateasset, {where:{am_id:am_id}});
}


module.exports=assetdao;