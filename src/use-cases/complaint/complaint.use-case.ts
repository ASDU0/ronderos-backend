import {Injectable} from "@nestjs/common";
import {IDataServices, Complaint} from "../../core";

@Injectable()
export class ComplaintUseCase {
    constructor(
        private dataServices: IDataServices,
    ) {
    }

    getComplaints(): Promise<Complaint[]> {
        return this.dataServices.complaints.getAll();
    }

    createComplaint(complaint: Complaint): Promise<Complaint> {
        return this.dataServices.complaints.create(complaint);
    }

    updateComplaint(id: string, complaint: Complaint): Promise<Complaint> {
        return this.dataServices.complaints.update(id, complaint);
    }

    deleteComplaint(id: string): Promise<Complaint> {
        return this.dataServices.complaints.delete(id);
    }

}