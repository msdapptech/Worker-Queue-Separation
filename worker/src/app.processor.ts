import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('MainQueue')
export class AppProcessor {
    @Process()
    async process(job: Job) {
        console.log(job.data);
    }
}
