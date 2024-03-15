/**
 * 1. Country 클래스는 나라 이름과 나라에 해당하는 아이돌 그룹정보를
 *    리스트로 갖는다.(name, idolGroups 프로퍼티)
 * 2. IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를
 *    리스트로 갖는다.(name, members 프로퍼티)
 * 3. Idol 클래스는 아이돌 이름과 출생년도 정보를 갖는다.
 *    (name, year 프로퍼티)
 * 4. MaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티를 갖는다.
 *    추가로 sing() 메서드를 실행하면 ${이름}이 노래를 합니다. 라는 문자열을 반환한다.
 * 5. FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티를 갖는다.
 *    추가로 dance() 메서드를 실행하면 ${이름}이 춤을 춥니다. 라는 문자열을 반환한다.
 */

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 합니다.`;
    }
}

class FemaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

const iveMembers = [
    {
        name: "안유진",
        year: 2003,
    },
    {
        name: "장원영",
        year: 2004,
    },
    {
        name: "가을",
        year: 2002,
    },
];

const btsMembers = [
    {
        name: "진",
        year: 1992,
    },
    {
        name: "슈가",
        year: 1993,
    },
    {
        name: "제이홉",
        year: 1994,
    },
];

const korea = new Country("대한민국", [
    new IdolGroup(
        "아이브",
        iveMembers.map((member) => new FemaleIdol(member.name, member.year))
    ),
    new IdolGroup(
        "BTS",
        btsMembers.map((member) => new MaleIdol(member.name, member.year))
    ),
]);
console.log(korea);
