import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ChatService } from 'src/app/services/chat.service'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
	selector: 'template-admin-chatbot',
	templateUrl: './chatbot.html',
	styleUrls: ['./chatbot.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AdminChatbotTemplate implements OnInit {
    msgForm: FormGroup
    formTitle: String = 'Add New'
    activeId: any
    activeAction: String = 'add'
    addMsg: Boolean = false
    page = {
        title: 'Chatbot',
        subTitle: 'Queries'
    }
    queries: any = []
	userData: any
    postData: any
    msgType: any = 'query'
	constructor(
        private formBuilder: FormBuilder,
        private chatService: ChatService,
        private route: ActivatedRoute,
        public router: Router
	) {
        this.msgType = this.route.snapshot.paramMap.get('msgType');
        this.getMessages()
        this.msgForm = this.formBuilder.group({
			Q: ['', Validators.required],
            A: ['', Validators.required],
            queryType: [this.msgType, Validators.required]
		})
    }
	ngOnInit() {

    }
    getMessages() {
        if (this.msgType == 'query') {
            this.page.subTitle = 'Queries'
            this.getChatData()
        } else {
            this.page.subTitle = 'Generic Messages'
            this.getGenericData()
        }
    }
	getGenericData() {
        this.chatService.getGenericData().subscribe(
            (data: any) => {
                this.queries = data.data
            },
            error => {
            }
        )
    }
    getChatData() {
        this.chatService.getChatData().subscribe(
            (data: any) => {
                this.queries = data.data
            },
            error => {
            }
        )
    }
    showMsgForm() {
        this.formTitle = 'Add New'
        this.activeAction = 'add'
        this.addMsg = true
    }
    editQuery(e) {
        this.formTitle = 'Edit'
        this.activeAction = 'edit'
        this.activeId = e.id
        this.addMsg = true
        this.msgForm.get("Q").setValue(e.Q);
        this.msgForm.get("A").setValue(e.A);
    }
    trashQuery(id) {
        let msgData = {id: id}
        this.chatService.deleteMessage(msgData)
        .subscribe(
            (data: any) => {
                if(data) {
                    if (data.success==1) {
                        this.getMessages()
                    } else {
                    }
                }else {
                }
            },
            error => {
            }
        )
    }
    addQuery() {
        if (this.msgForm.valid) {
            let msgData
            if (this.activeAction == 'edit') {
                msgData = {
                    Q: this.msgForm.value.Q,
                    A: this.msgForm.value.A,
                    queryType: this.msgForm.value.queryType,
                    isEdit: 1,
                    id: this.activeId
                }                
            } else {
                msgData = {
                    Q: this.msgForm.value.Q,
                    A: this.msgForm.value.A,
                    queryType: this.msgForm.value.queryType
                }                
            }
			this.chatService.saveMessage(msgData)
			.subscribe(
				(data: any) => {
					if(data) {
						if (data.success==1) {
                            this.msgForm.reset()
                            this.msgForm.get("queryType").setValue(this.msgType);
                            this.addMsg = false
                            this.getMessages()
						} else {
						}
					}else {
					}
				},
				error => {
				}
			)
		}
    }
}