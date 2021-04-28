var Site = new Vue({
    el: "#body",
    data: {
        freeScripts: [
            { name: "Holzkopf Crimelife", desc: "This package includes the latest Holzkopf Crimelife systems.", date: "29.04.2021", price: 0, download: ""}
        ],
        paidScripts: [
            { name: "GVMP Gangwar", desc: "This package includes the latest GVMP designs, powerful systems and many unique features.", date: "29.05.2021", price: 70, download: ""}
        ],
        currentScript: {},
        currentPopup: -1
    },
    methods: {
        setPopup(i){
            this.currentPopup = i;
        },
        setCurrent(e, f){
            var A = f ? this.freeScripts : this.paidScripts;
            for(var i = 0; i < A.length; i++){
                if(A[i].name == e.firstChild.innerText) this.currentScript = A[i];
            }
        },
        download(){
            window.open(this.currentScript.download);
        }
    }
});