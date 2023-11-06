


export abstract class IGenericRepository<T> {
    abstract create(item: T): Promise<T>;
    abstract update(id: string, item: T): Promise<T>;
    abstract delete(id: string): Promise<T>;
    abstract getAll(): Promise<T[]>;
    abstract getAllUsers():Promise<T[]>;
    abstract getById(id: string): Promise<T>;
    abstract getFindOne(query:any):Promise<T>;
}