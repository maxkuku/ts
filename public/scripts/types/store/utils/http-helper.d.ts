export declare abstract class HttpHelper {
    /**
    * Метод выполняет запрос и преобразует ответ в JSON
    * Тип ответа будет взять из дженерик параметра Response
    */
    static fetchAsJson<Response>(input: RequestInfo, init?: RequestInit): Promise<Response>;
}
