import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  imports: [CommonModule],
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Platform QA & Automation',
      description: `Performed end-to-end QA for a large-scale e-commerce platform, ensuring robust functionality and smooth user experience.`,
      techStack: 'Selenium WebDriver, Java, Jenkins, BrowserStack, Extent Reports.'
    },
    {
      title: 'E-commerce Order Migration Project',
      description: `Migrated 16,000+ orders from a legacy e-commerce site to a new NopCommerce platform using Selenium and TDD workflow.`,
      techStack: 'Selenium WebDriver, Java, Jenkins, BrowserStack, TDD.'
    }
  ];
}
