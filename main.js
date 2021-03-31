var app = new Vue(
  {
  el: '#root',
  data: {
    index: 0,
    imgSrc: '',
    arrayImgs: [
      'https://static.dezeen.com/uploads/2019/02/UTS-Business-School-by-Frank-Gehry_dezeen_sq-a.jpg',
      'https://www.inexhibit.com/wp-content/uploads/2019/12/Daniel-Libeskind-MO-Museum-Vilnius-Lithuania-exterior-6-870x580.jpg',
      'https://i.pinimg.com/originals/1c/62/13/1c62137909e0773beea00927c60ec26d.jpg',
    ]
  },

  methods: {
    next: function () {
      if (this.index < this.arrayImgs.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev: function () {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.arrayImgs.length - 1;
      }
    },
    dotSelection: function (index) {
      this.index = index;
    }
  }
});
