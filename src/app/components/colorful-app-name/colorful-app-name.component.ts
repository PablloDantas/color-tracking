import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-colorful-app-name',
  imports: [],
  templateUrl: './colorful-app-name.component.html',
  styleUrl: './colorful-app-name.component.css'
})

export class ColorfulAppNameComponent implements OnInit, OnDestroy {
  @ViewChild('textElement') textElement!: ElementRef;

  private colors = ['#e772c1', '#6fd5db', '#f8b77c', '#72e37d', '#fe5a5b'];
  private intervalId: any;
  private words: string[] = [];
  private originalText = '';

  ngOnInit() {
    // Aguardar a view ser inicializada
    setTimeout(() => {
      this.originalText = this.textElement.nativeElement.innerText;
      this.words = this.originalText.split(' ');

      // Aplicar cores iniciais
      this.updateColors();

      // Atualizar cores a cada 1 segundo
      this.intervalId = setInterval(() => {
        this.updateColors();
      }, 1000);
    }, 0);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateColors() {
    let coloredHTML = '';

    // Para cada palavra, criar um grupo de cores único
    for (let wordIndex = 0; wordIndex < this.words.length; wordIndex++) {
      const word = this.words[wordIndex];

      // Criar um grupo de cores embaralhado para esta palavra
      const colorGroup = this.createShuffledColorGroup();

      // Aplicar as cores aos caracteres da palavra
      for (let charIndex = 0; charIndex < word.length; charIndex++) {
        // Usar cores do grupo de forma cíclica (caso a palavra tenha mais caracteres que cores)
        const color = colorGroup[charIndex % colorGroup.length];
        coloredHTML += `<span style="color: ${color}">${word[charIndex]}</span>`;
      }

      // Adicionar espaço entre palavras (exceto na última palavra)
      if (wordIndex < this.words.length - 1) {
        coloredHTML += ' ';
      }
    }

    this.textElement.nativeElement.innerHTML = coloredHTML;
  }

  // Cria um grupo de cores embaralhadas sem repetição
  private createShuffledColorGroup(): string[] {
    // Criar cópia do array de cores para não modificar o original
    const shuffledColors = [...this.colors];

    // Embaralhar as cores usando o algoritmo Fisher-Yates
    for (let i = shuffledColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
    }

    return shuffledColors;
  }
}

