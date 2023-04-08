interface StringValidator {
    isAcceptable(s: string): boolean;
}
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s)
    }
}
class ZipCodeValidator {
    ifAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s)
    }
}
let strings = ["Hello", "98052", "101"];
let validators: { [s: string]: StringValidator; } = {}

validators["Letters only"] = new LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
