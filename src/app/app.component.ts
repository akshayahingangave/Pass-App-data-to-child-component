import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassDataParentcompTochild';
  u_prog = ['What You Can Eat', 'What You can NOT Eat', 'Health Benefits ',
    'Risks', 'How to Go Vegan'];

  prog_details = [` *Fruits and vegetables
  *Legumes such as peas, beans, and lentils
  *Nuts and seeds
  *Breads, rice, and pasta
  *Dairy alternatives such as soymilk, coconut milk, and almond milk
  *Vegetable oils
  `, 
  `*Beef, pork, lamb, and other red meat
  *Chicken, duck, and other poultry
   *Fish or shellfish such as crabs, clams, and mussels
  *Eggs
  *Cheese, butter
  *Milk, cream, ice cream, and other dairy products
  *Mayonnaise (because it includes egg yolks)
  *Honey
  `,
    `Studies show that vegans have better heart health and lower odds of having certain diseases. Those who skip meat have less of a chance of becoming obese or getting heart disease, high cholesterol, and high blood pressure. Vegans are also less likely to get diabetes and some kinds of cancer, especially cancers of the GI tract and the breast, ovaries, and uterus in women.`, 
`A vegan diet is healthy overall, but avoiding animal protein can shortchange you on a few nutrients, like protein, calcium, omega-3 fatty acids, zinc, and vitamin B12. `,
    `Does the idea of a vegan diet interest you, but you're not sure how to start? If you want, you could plunge right in and cut out all poultry, meat, eggs, and dairy at once. Or, take a more gradual approach and increase the amount of fruits and vegetables you eat at each meal.`];
  options!: number;
  curr_info: string | undefined;
  prog_title: string | undefined;

  constructor() { }

  onClick(lang: any) {
    switch (lang) {
      case 'What You Can Eat':
        this.options = 0;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'What You can NOT Eat':
        this.options = 1;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'Health Benefits ':
        this.options = 2;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'Risks':
        this.options = 3;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'How to Go Vegan':
        this.options = 4;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      default:
        break;
    }
  }
}
