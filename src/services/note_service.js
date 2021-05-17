import axios_service from "./axios_service";
class NoteService {
    constructor() {
        this.axiosService = new axios_service();
        this.baseUrl = 'http://localhost:8000/notes'
    }

    create(data) {
        return this.axiosService.post(this.baseUrl, data, false);
    }
    getAllNotes() {
        return this.axiosService.get(this.baseUrl);
    }
    updateNote(id, data) {
        return this.axiosService.put(`${this.baseUrl}/${id}`, data);
    }
    deleteNote(id) {
        return this.axiosService.delete(`${this.baseUrl}/${id}`);
    }
}
export default new NoteService();