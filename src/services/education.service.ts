import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../types';
import ApiClient from '../api/ApiClient';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async getEducations(): Promise<Education[]> {
    const response = await this.apiClient.getEducations();

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  }

  async addEducation(education: Education): Promise<Education> {
    const response = await this.apiClient.createEducation(education);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return education; // this is a temporary solution, should be replaced with the response data
  }

  async updateEducation(education: Education): Promise<Education> {
    const response = await this.apiClient.updateEducation(education);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return education; // this is a temporary solution, should be replaced with the response data
  }

  async deleteEducation(education: Education) {
    const response = await this.apiClient.deleteEducation(education.id);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return education; // this is a temporary solution, should be replaced with the response data
  }
}
