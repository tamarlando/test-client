import { Permission } from "../enums/permission";
import { Role } from "../enums/role";

export interface User {
    id: string;
    name: string;
    role: Role;
    permission: Permission;
}
