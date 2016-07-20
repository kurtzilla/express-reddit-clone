module.exports = {
  // ensure that the returned value is a single int value
  normalizeReturnedId: function(id){
    return parseInt(Array.isArray(id) ? id[0] : id);
  }
}
