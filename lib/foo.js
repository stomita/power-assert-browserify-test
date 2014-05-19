module.exports = {

  bar: function(name) {
    return {
      method: "bar",
      name: name
    };
  },

  baz: function() {
    throw new Error("not defined yet");
  }
  
};