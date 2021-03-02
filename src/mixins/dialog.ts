// mixin's option will be directly merged into the component which uses the mixin
// if the option props' name is overlapped, the priority goes to the component; mixin will be ignored
import { Vue, Component } from 'vue-property-decorator';

// @Component({
//   data(): DialogMixinData {
//     return {
//       dialog: true,
//     }
//   }
// })
@Component
export default class DialogMixin extends Vue {
  public dialog: boolean = true;
  public test: string = '';

  showDialog(): void {
    this.dialog = true;
  }
  closeDialog(): void {
    this.dialog = false;
  }
}

// 1. vue class component에서 data에 타입 정의를 어떻게 부여할 것인가
// 2. 믹스인의 멤버는 타입을 어떻게 부여하는가

// const DialogMixin = {
//   data: function() {
//     return {
//       dialog: true,
//     };
//   },
//   methods: {
//     showDialog() {
//       this.dialog = true;
//     },
//     closeDialog() {
//       this.dialog = false;
//     },
//   }
// };

// export default DialogMixin;
