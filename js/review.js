class SideBar {
    constructor(target, direction) {
        if(typeof target === 'string'){
            this.target = document.querySelector(target);
        }else{
            this.target = target;
        }

        this.direction = direction;
        this.opend = false;
        this.width = this.target.offsetWidth;
        this.init();
    }

    init() {
        this.target.style[this.direction] = `-${this.width}px`;
    }

    open() {
        if(this.opend){
            this.close();
            return;
        }
        this.opend = true;
        this.target.style[this.direction] = `0`;
        $('body').css({'overflow':'hidden'});
        $('.side_bar').css({'opacity':'1'});
        $('.gnb_btn_bg').css({'visibility':'visible'});
        $('#floating').css({'visibility':'hidden'});
    }

    close() {
        this.target.style[this.direction] = `-${this.width}px`;
        this.opend = false;
        $('body').css({'overflow':''});
        $('.side_bar').css({'opacity':'0'});
        $('.gnb_btn_bg').css({'visibility':'hidden'});
        $('#floating').css({'visibility':'visible'});
    }
}