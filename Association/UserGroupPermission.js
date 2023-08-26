"use strict";
class Permission {
    constructor(type) {
        this.type = type;
    }
}
class PermissionRegistry {
    constructor() {
        this.permissions = new Map();
    }
    static getInstance() {
        if (!PermissionRegistry.instance) {
            PermissionRegistry.instance = new PermissionRegistry();
        }
        return PermissionRegistry.instance;
    }
    register(type) {
        const permission = new Permission(type);
        this.permissions.set(type, permission);
        return permission;
    }
    getPermission(type) {
        return this.permissions.get(type);
    }
}
class Group {
    constructor(name) {
        this.name = name;
        this.permissions = new Set();
    }
    addPermission(permission) {
        this.permissions.add(permission);
    }
}
class User {
    constructor(name) {
        this.name = name;
        this.groups = new Set();
    }
    joinGroup(group) {
        this.groups.add(group);
    }
    hasPermission(permissionType) {
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
console.log(alice.hasPermission('READ')); // true
console.log(alice.hasPermission('WRITE')); // true
console.log(bob.hasPermission('WRITE')); // false
//# sourceMappingURL=UserGroupPermission.js.map