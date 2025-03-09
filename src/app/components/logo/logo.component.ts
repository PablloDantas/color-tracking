import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit, OnDestroy {
  colors = ['#e772c1', '#6fd5db', '#f8b77c', '#72e37d', '#fe5a5b'];
  rect1Color = '';
  rect2Color = '';
  rect3Color = '';
  rect4Color = '';
  rect5Color = '';

  private intervalId: any;

  ngOnInit() {
    // Define cores iniciais
    this.updateColors();

    // Muda as cores a cada 1 segundo
    this.intervalId = setInterval(() => {
      this.updateColors();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateColors() {
    // Cria uma cópia do array de cores para manipular
    const availableColors = [...this.colors];

    // Embaralha o array de cores para aumentar a aleatoriedade
    this.shuffleArray(availableColors);

    // Como temos 5 retângulos e 5 cores, cada retângulo receberá uma cor única
    this.rect1Color = availableColors[0];
    this.rect2Color = availableColors[1];
    this.rect3Color = availableColors[2];
    this.rect4Color = availableColors[3];
    this.rect5Color = availableColors[4];
  }

  private shuffleArray(array: string[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}


