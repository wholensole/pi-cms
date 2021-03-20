import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, Inject } from '@angular/core'
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { AppConstants } from 'src/app/app.constants';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
declare var $: any
@Component({
	selector: 'widget-chat-fixed',
	templateUrl: './chat-fixed.html',
	styleUrls: ['./chat-fixed.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ChatFixedWidget implements OnInit {
	showWidget: Boolean = true
	showChatbot: Boolean = false
    askForm : FormGroup
    imageBase = this.appConstants.imageBase
    msgList: any
    chatData : any
    genericData : any
    mutationObserver: MutationObserver
	constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
		public router: Router,
		private formBuilder: FormBuilder,
        private chatService: ChatService,
        private appConstants: AppConstants
	) {
		this.askForm = new FormGroup({
			query : new FormControl('', [Validators.required])
		})
        this.msgList = []
        this.addMsg('Hi!', 'bot')
        this.addMsg('How can I help you?', 'bot')
        this.getGenericData()
        this.getChatData()
	}
	goToContact() {
		this.router.navigate(['contact'])
	}
	ngOnInit() {

	}
	addMsg (msgContent, type = 'mine') {
		let now = new Date()
		let time = now.toLocaleTimeString()
		let date = now.toLocaleDateString()
		let msg = {
			msg : msgContent,
			type : type,
			time : time,
			date : date
        }
        this.msgList.push( msg )
        setTimeout(() => {
            $('.chatbot-window .body').animate({
                scrollTop: $(".msg-bottom").offset().top
            }, 1000);
        }, 500);
    }
    operate(msg) {
        msg = ''+msg+''
        msg = this.removeGenericWords(msg)
        msg = msg.toLowerCase().replace(/[' !-\?,"@#$%^&*()_=+{}|\\`~:;><./]/g,'')
        for (let i = msg.length; i >= 0; i--) {
            msg = msg.replace(/aa/g,"a").replace(/bb/g,"b").replace(/cc/g,"c").replace(/dd/g,"d").replace(/ee/g,"e").replace(/ff/g,"f").replace(/gg/g,"g").replace(/hh/g,"h").replace(/ii/g,"i").replace(/jj/g,"j").replace(/kk/g,"k").replace(/ll/g,"l").replace(/mm/g,"m").replace(/nn/g,"n").replace(/oo/g,"o").replace(/pp/g,"p").replace(/qq/g,"q").replace(/rr/g,"r").replace(/ss/g,"s").replace(/tt/g,"t").replace(/uu/g,"u").replace(/vv/g,"v").replace(/ww/g,"w").replace(/xx/g,"x").replace(/yy/g,"y").replace(/zz/g,"z")
        }
        let lastChar = msg.substr(msg.length - 1)
        let firstChar = msg.charAt(0)
        if (lastChar === " ") {
            msg = msg.replace(/.$/,"")
        }
        if (firstChar === " ") {
            msg = msg.substr(1)
        }
        return msg
    }

    getGenericData() {
        this.chatService.getGenericData().subscribe(
            (data: any) => {
                this.localStorage.setItem('genericData', JSON.stringify(data.data))
            },
            error => {
            }
        )
    }

    getChatData() {
        this.chatService.getChatData().subscribe(
            (data: any) => {
                this.localStorage.setItem('chatData', JSON.stringify(data.data))
            },
            error => {
            }
        )
    }

    saveQuery( msg ) {
        let msgData = {
            Q: msg,
            A: '',
            queryType: 'query'
        }
        this.chatService.saveMessage(msgData)
        .subscribe(
            (data: any) => {
                if(data) {
                    if (data.success==1) {
                        this.getGenericData()
                        this.getChatData()
                        this.addMsg('I\'m sorry I can\'t answer this right now. Please contact the PI CMS sales team for a response to your question. They are available at: sales@pi-cms.com', 'bot')
                    } else {
                    }
                }else {
                }
            },
            error => {
            }
        )
    }

    removeGenericWords(str){
      let genericWords = [
        'a', 'an', 'the', 'is', 'are', 'am', 'is', 'was', 'were', 'will', 'shall', 'should', 'would', 'has', 'have', 'had'
      ]
      let re
      let newStr = str
      genericWords.forEach(e => {
        re = new RegExp(' '+e+' ',"g");
        newStr = newStr.replace(/freedom/g, "liberty");
      });
      return newStr;
    }

    getStringPercentgeDifference(a, b){
      let tmp;
      if (a.length === 0) { return b.length; }
      if (b.length === 0) { return a.length; }
      if (a.length > b.length) { tmp = a; a = b; b = tmp; }
      let i, j, res, alen = a.length, blen = b.length, row = Array(alen);
      for (i = 0; i <= alen; i++) { row[i] = i; }
      for (i = 1; i <= blen; i++) {
        res = i;
        for (j = 1; j <= alen; j++) {
          tmp = row[j - 1];
          row[j - 1] = res;
          res = b[i - 1] === a[j - 1] ? tmp : Math.min(tmp + 1, Math.min(res + 1, row[j] + 1));
        }
      }
      let perres = 0
      if (a.length > b.length) {
          perres = (a.length - res)*100/a.length;
      }
      else {
          perres = (b.length - res)*100/b.length;
      }
      return perres;

    }

    ansQuery(msg = '') {
        if (this.askForm.valid || msg != '') {
            if (msg == '') {
                msg = this.askForm.value.query
            }
            this.addMsg(msg)
            this.askForm.reset()
            if(this.localStorage.getItem('genericData')) {
                this.genericData = JSON.parse(this.localStorage.getItem('genericData'))
                this.chatData = JSON.parse(this.localStorage.getItem('chatData'))
                let operatedMsg = this.operate(msg)
                let isGeneric = false
                let msgAns = ''
                for (let i = this.genericData.length - 1; i >= 0; i--) {
                    if(this.operate(this.genericData[i].Q) == operatedMsg) {
                        msgAns = (this.genericData[i].A)?(this.genericData[i].A):'I\'m sorry I can\'t answer this right now. Please contact the PI CMS sales team for a response to your question. They are available at: sales@pi-cms.com'
                        isGeneric = true
                        break
                    }
                }
                if (isGeneric) {
                    this.addMsg(msgAns, 'bot')
                    isGeneric = false
                }
                else {
                    for (let i = this.chatData.length - 1; i >= 0; i--) {
                        if(this.operate(this.chatData[i].Q) == operatedMsg) {
                            msgAns = (this.chatData[i].A)?(this.chatData[i].A):'I\'m sorry I can\'t answer this right now. Please contact the PI CMS sales team for a response to your question. They are available at: sales@pi-cms.com'
                            break
                        }
                    }
                    if (msgAns == ''){
                        this.saveQuery(msg)
                    }
                    else {
                        this.addMsg(msgAns, 'bot')
                    }
                }
            }
            else {
                this.getGenericData()
                this.getChatData()
            }
        }
        this.askForm.reset()
    }
}
