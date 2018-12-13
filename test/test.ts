import * as assert from "assert";
import argnames from "./../src";

describe("#index.ts", () => {
    describe("#argnames", () => {
        it('argnames(function(a:string,b:number){}) should return ["a","b"]', () => {
            assert.deepEqual(argnames(function(a: string, b: number) {}), ["a", "b"]);
        });
    });
});
