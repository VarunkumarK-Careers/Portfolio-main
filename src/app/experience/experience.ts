import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  imports: [CommonModule],
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Quality Engineer – Cimpress India',
      duration: 'Aug 2023 – Present',
      tagline: 'The Optimizer',
      stars: 5,
      details: [
        'Automated test cases with Selenium, boosting efficiency by 55%',
        'Built smoke tests for deployments, cutting regression by 80%',
        'Configured Extent reports to accelerate analysis processes by 30%',
        'Implemented Page Object Model for UI testing, enhancing script maintainability by 18%',
        'Integrated Jenkins for CI/CD pipelines, cutting project delivery timelines by 30%',
        'Conducted cross-browser testing via BrowserStack, ensuring functionality across major browsers',
        'Designed test plans with teams, ensuring full critical coverage',
        'Performed risk analysis and prioritized test cases, reducing post-release defects by 40%'
      ]
    },
    {
      role: 'Quality Assurance Intern – Cimpress India',
      duration: 'Feb 2023 – July 2023',
      tagline: 'The Bug Buster',
      stars: 5,
      details: [
        'Created and maintained test cases, scripts, and plans for e-commerce websites',
  'Executed functional, regression, integration, and performance tests',
  'Tracked and resolved bugs using bug tracking systems',
  'Performed UAT with stakeholders to validate product functionality',
  'Built and debugged automated workflows for various business processes'
      ]
    }
    
  ];

  getStars(count: number): number[] {
    return Array(count).fill(0);
  }
}