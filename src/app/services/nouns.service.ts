import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Noun } from '../../api/models/noun.model';

@Injectable()
export class NounsService {
    private static RestPath: string = 'rest/nouns';

    constructor(private http: HttpService) {
    }

    public getAllNounsAsync(): Promise<Noun[]> {
        return this.http.getAsync(NounsService.RestPath);
    }
    
    public addNounAsync(noun: Noun): Promise<void> {
        return this.http.postAsync(NounsService.RestPath, noun);
    }
}