import React, { Component } from 'react';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curClass: "Mountain Pictures",
            curItems:["/assets/mount1.jpg","/assets/mount2.jpg","/assets/mount3.jpg","/assets/mount4.jpg","/assets/mount1.jpg","/assets/mount2.jpg","/assets/mount2.jpg","/assets/mount4.jpg"]
          };
        this.setClass = this.setClass.bind(this);
        this.setItems = this.setItems.bind(this);
    }

    setClass(curClass) {
        this.setState({
        curClass: curClass
        });
    }

    setItems(curItems){
        this.setState({
            curItems: curItems
        });
    }
   
    render() {
        const pictures = this.state.curItems.map((pic) => {
            return (
              <div className=" col-6 col-md-3 center-items">
                 <img class="img-fit" src={pic} alt={pic}></img>
              </div>
            );
        });
        return (
            <div class = "container">
                <div class = " row-content center-items">
                    <div class = "classLabel">
                        <button class="btn btn-tag" onClick={() => {
                        this.setClass("Mountain Pictures");
                        this.setItems(["/assets/mount1.jpg","/assets/mount2.jpg","/assets/mount3.jpg","/assets/mount4.jpg","/assets/mount1.jpg","/assets/mount2.jpg","/assets/mount2.jpg","/assets/mount4.jpg"]);
                        }}><strong>Mountain</strong></button>
                    </div>
                    <div class = " classLabel">
                        <button class="btn btn-tag" onClick={() => {
                        this.setClass("Beach Pictures");
                        this.setItems(["/assets/beach1.jpg","/assets/beach2.jpg","/assets/beach3.jpg","/assets/beach1.jpg","/assets/beach3.jpg","/assets/beach2.jpg","/assets/beach1.jpg","/assets/beach4.jpg"]);
                        }}><strong>Beaches</strong></button>
                    </div>
                    <div class = "classLabel">
                        <button class="btn btn-tag" onClick={() => {
                        this.setClass("Bird Pictures");
                        this.setItems(["/assets/bird1.jpg","/assets/bird2.jpg","/assets/bird1.jpg","/assets/bird3.jpg","/assets/bird4.jpg","/assets/bird1.jpg","/assets/bird2.jpg","/assets/bird3.jpg"]);
                        }}><strong>Birds</strong></button>
                    </div>
                    <div class = "classLabel">
                        <button class="btn btn-tag" onClick={() => {
                        this.setClass("Food Pictures");
                        this.setItems(["/assets/food1.jpg","/assets/food3.jpg","/assets/food2.jpg","/assets/food4.jpg","/assets/food4.jpg","/assets/food3.jpg","/assets/food2.jpg","/assets/food1.jpg"]);
                        }}><strong>Food</strong></button>
                    </div>
                </div>
                <div class = "center-items">
                        <h3>{this.state.curClass}</h3>
                </div>
                <div class = "row center-items">
                    {pictures}
                </div>
      
            </div>

        );
    }
}

export default Main;