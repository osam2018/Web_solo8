import Vue from "vue";

export default class Model {

    public static _instance:Model;

    public static getInstance(){
        if(Model._instance==null) {
            Model._instance = new Model();
        }

        return Model._instance;
    }


    constructor(){
    }

    async getData1(){
        let result  = await Vue.$http.get("./mockup_data/data1.json");
        console.log("result ", result)
        return result.data.list;
    }

}