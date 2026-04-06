
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Simple flat skills array for compact star-based display

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Java', stars: 3.5 },
    { name: 'Selenium', stars: 5 },
    { name: 'TestNG', stars: 4 },
    { name: 'Cucumber', stars: 4 },
    { name: 'Jira', stars: 4 },
    { name: 'AWS', stars: 3 },
    { name: 'Playwright', stars: 3.5 },
    { name: 'TypeScript', stars: 3 },
    { name: 'BitBucket', stars: 4 },
    { name: 'Jenkins', stars: 3 },
    { name: 'BrowserStack', stars: 4 },
    { name: 'Extent Reports', stars: 4 },
  ];
}
