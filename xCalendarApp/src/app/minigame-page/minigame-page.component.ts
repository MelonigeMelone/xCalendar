import { Component, OnInit, HostListener, inject } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flappy-bird',
  imports: [HeaderComponent, FooterComponent],
  standalone: true,
  templateUrl: './minigame-page.html',
  styleUrls: ['./minigame-page.component.scss']
})
export class FlappyBirdComponent{

  private canvas: HTMLCanvasElement | undefined;
  private context: CanvasRenderingContext2D | undefined;
  private router: Router = inject(Router);
  private bird = { x: 50, y: 150, width: 20, height: 20, gravity: 0.6, lift: -7.5, velocity: 0 };
  private pipes: { x: number; y: number; width: number; height: number }[] = [];
  private frame = 0;
  public score = 0;
  private gameOver = false;

  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('gameCanvas');
    this.context = this.canvas.getContext('2d')!;
    this.canvas.width = 320;
    this.canvas.height = 480;
    this.resetGame();
    this.updateGame();
  }
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.bird.velocity = this.bird.lift;
    }
  }
  @HostListener('window:mousedown')
  handleMouseDown() {
    this.bird.velocity = this.bird.lift;
  }

  resetGame() {
    this.bird.y = 150;
    this.bird.velocity = 0;
    this.pipes = [];
    this.frame = 0;
    this.score = 0;
    this.gameOver = false;
  }

  updateGame() {
    if (this.gameOver) {
      this.context!.fillStyle = "white";
      this.context!.font = "20px Arial";
      this.context!.fillText("Game Over", 100, 240);
      this.context!.fillText("Score: " + this.score, 100, 270);
      return;
    }

    this.frame++;
    this.context!.clearRect(0, 0, this.canvas!.width, this.canvas!.height);
    this.drawBird();
    this.updateBird();
    this.handlePipes();
    this.checkCollision();

    requestAnimationFrame(() => this.updateGame());
  }

  drawBird() {
    this.context!.fillStyle = "yellow";
    this.context!.fillRect(this.bird.x, this.bird.y, this.bird.width, this.bird.height);
  }

  updateBird() {
    this.bird.velocity += this.bird.gravity;
    this.bird.y += this.bird.velocity;
    if (this.bird.y > this.canvas!.height - this.bird.height) {
      this.bird.y = this.canvas!.height - this.bird.height;
      this.bird.velocity = 0;
    }
    if (this.bird.y < 0) {
      this.bird.y = 0;
      this.bird.velocity = 0;
    }
  }

  handlePipes() {
    if (this.frame % 90 === 0) {
      let pipeHeight = Math.floor(Math.random() * 200) + 50;
      this.pipes.push({ x: this.canvas!.width, y: 0, width: 20, height: pipeHeight });
      this.pipes.push({ x: this.canvas!.width, y: pipeHeight + 100, width: 20, height: this.canvas!.height - pipeHeight - 100 });
    }

    this.pipes = this.pipes.filter(pipe => pipe.x + pipe.width > 0);

    this.pipes.forEach(pipe => {
      pipe.x -= 2;
      this.context!.fillStyle = "green";
      this.context!.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
    });

    if (this.frame % 90 === 0) {
      this.score++;
    }
  }

  checkCollision() {
    this.pipes.forEach(pipe => {
      if (
        this.bird.x < pipe.x + pipe.width &&
        this.bird.x + this.bird.width > pipe.x &&
        this.bird.y < pipe.y + pipe.height &&
        this.bird.y + this.bird.height > pipe.y
      ) {
        this.gameOver = true;
      }
    });
  }
  refreshGame(){
    this.resetGame();
    window.location.reload();
  }
  navigateHome(){
    this.router.navigate(['home/:userMailAddress/:userPassword']);
  }
}
