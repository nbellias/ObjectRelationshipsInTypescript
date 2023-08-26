/*
A more complex example is a UserGroupPermission system.
We have the following entities:
    User
    Group
    Permission
In this example, a User can belong to multiple Groups.
Each Group has a set of Permissions. 
The idea here is to check if a user has a certain permission 
by virtue of the groups they belong to.
We use TypeScript's advanced type features, encapsulation, and 
the Singleton pattern for the permissions registry.
The encapsulation helps keep each class's internal structure 
and logic separate and clear, while the Singleton pattern 
provides a consistent way to handle permissions across the system.
*/
type PermissionType = 'READ' | 'WRITE' | 'DELETE';

class Permission {
    type: PermissionType;

    constructor(type: PermissionType) {
        this.type = type;
    }
}

class PermissionRegistry {
    private static instance: PermissionRegistry;
    private permissions: Map<PermissionType, Permission> = new Map();

    private constructor() { }

    static getInstance(): PermissionRegistry {
        if (!PermissionRegistry.instance) {
            PermissionRegistry.instance = new PermissionRegistry();
        }
        return PermissionRegistry.instance;
    }

    register(type: PermissionType): Permission {
        const permission = new Permission(type);
        this.permissions.set(type, permission);
        return permission;
    }

    getPermission(type: PermissionType): Permission {
        return this.permissions.get(type)!;
    }
}

class Group {
    name: string;
    permissions: Set<Permission>;

    constructor(name: string) {
        this.name = name;
        this.permissions = new Set();
    }

    addPermission(permission: Permission): void {
        this.permissions.add(permission);
    }
}

class User {
    name: string;
    groups: Set<Group>;

    constructor(name: string) {
        this.name = name;
        this.groups = new Set();
    }

    joinGroup(group: Group): void {
        this.groups.add(group);
    }

    hasPermission(permissionType: PermissionType): boolean {
        for (let group of this.groups) {
            if (group.permissions.has(PermissionRegistry.getInstance().getPermission(permissionType))) {
                return true;
            }
        }
        return false;
    }
}

// Usage:

const registry = PermissionRegistry.getInstance();
const readPermission = registry.register('READ');
const writePermission = registry.register('WRITE');

const adminGroup = new Group('Admins');
adminGroup.addPermission(readPermission);
adminGroup.addPermission(writePermission);

const readOnlyGroup = new Group('ReadOnly');
readOnlyGroup.addPermission(readPermission);

const alice = new User('Alice');
alice.joinGroup(adminGroup);

const bob = new User('Bob');
bob.joinGroup(readOnlyGroup);

console.log(alice.hasPermission('READ'));  // true
console.log(alice.hasPermission('WRITE')); // true
console.log(bob.hasPermission('WRITE'));   // false
