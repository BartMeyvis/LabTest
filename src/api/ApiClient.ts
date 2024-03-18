import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Education } from '../types';
import { environment } from '../../environment';

class ApiClient {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: environment.API_BASE_URL,
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public async getEducations(): Promise<AxiosResponse<Education[]>> {
    return this.http.get<Education[]>('/education');
  }

  public async getEducation(id: string): Promise<AxiosResponse<Education>> {
    return this.http.get<Education>(`/education/${id}`);
  }

  public async createEducation(
    education: Education
  ): Promise<AxiosResponse<Education>> {
    return this.http.post<Education>('/education', education);
  }

  public async updateEducation(
    education: Education
  ): Promise<AxiosResponse<Education>> {
    return this.http.put<Education>(`/education/${education.id}`, education);
  }

  public async deleteEducation(id: number): Promise<AxiosResponse<void>> {
    return this.http.delete<void>(`/education/${id}`);
  }
}

export default ApiClient;
