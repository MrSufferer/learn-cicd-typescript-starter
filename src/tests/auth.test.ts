import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const person = {
    isActive: true,
    age: 32,
};

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    });
});

describe("getAPIKey", () => {
    test("returns API key", () => {
        const headers = {
            authorization: "ApiKey 1234567890",
        };
        expect(getAPIKey(headers)).toBe("1234567890");
    });
});
