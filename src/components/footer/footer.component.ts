import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class FooterComponent extends Vue {
  icons: string[] = [
    'mdi-facebook',
    'mdi-github',
    'mdi-linkedin',
    'mdi-instagram',
  ]
  social: string[] = [
    'https://www.facebook.com/keva.damargalih/',
    'https://github.com/kevadamar',
    'https://www.linkedin.com/in/keva-damar-galih-10708b190/',
    'https://www.instagram.com/kevadamar/',
  ]
  mounted (){
  }
  sosmed(key: number){
    console.log(typeof this.social[key])
    window.location.href = this.social[key]
  }
}

