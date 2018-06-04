import { HttpClient } from '@angular/common/http';
import { Entity } from '@app/interfaces';
import { Observable } from 'rxjs';

export class CrudService<T extends Entity> {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  public create(entity: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, JSON.stringify(entity));
  }

  public update(entity: T): Observable<T> {
    return this.http.put<T>(
      `${this.baseUrl}/${entity.id}`,
      JSON.stringify(entity),
    );
  }

  public delete(entity: T): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${entity.id}`);
  }
}
