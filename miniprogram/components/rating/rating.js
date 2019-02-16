Component({
  properties:{
    rating:{
      type: Object
    }
  },
  data:{
    full: 0,
    half: 0,
    gray: 0
  },

  ready(){
    let average = this.properties.rating.average
    this.setData({ full: new Array(parseInt(average / 2)), half: new Array(average % 2 === 0 ? 0 : 1)})
    this.setData({ gray: new Array(5 - this.data.full.length - this.data.half.length)})
    // console.log(this.data)
  }
})