class DeclineService {
    noun: string;
    nounBase: string;
    lastLetter: string;
    last2Letters: string;
    last4Letters: string;

    constructor(noun: string) {
        this.noun = noun.toLowerCase();
        this.nounBase = noun.slice(0, -1)
        this.lastLetter = this.noun.slice(-1);
        this.last2Letters = this.noun.slice(-2);
        this.last4Letters = this.noun.slice(-4);
    }

    defineCases() {
        return [
            this.noun,
            this.makeNounGenitive(),
            this.makeNounDative(),
            this.makeNounAccusative(),
            this.makeNounAblative(),
            this.makeNounPrepositional()
        ]
    }

    defineGender() {
        if (this.last4Letters === 'ость') {
            if (this.noun === 'гость') {
                return 'masculine';
            }
            return 'feminine';
        }
        if (this.last2Letters === 'чь' || this.last2Letters === 'жь' || this.last2Letters === 'шь' || this.last2Letters === 'щь')  {
            return 'feminine';
        }
        if (this.lastLetter === 'ь') {
            return 'masculine';
        }
    }

    defineDeclination() {
        switch (this.lastLetter) {
            case 'а':
            case 'я':
                return this.isHeterogeneous() ? 'heterogeneous' : 'first';
            case 'ь':
                return this.defineGender() === 'masculine' ? 'second' : 'third';
            case 'у':
            case 'ю':
            case 'и':
                return 'indeclinable';
            case 'е':
            case 'о':
                return this.isPopularIndeclinable() ? 'indeclinable' : 'second';
            default:
                return 'second';
        }
    }

    getNominativeNoun() {
        return this.noun;
    }

    makeNounGenitive() {
        switch (this.defineDeclination()) {
            case 'first':
                return this.lastLetter === 'а' ? this.nounBase + 'ы' : this.nounBase + 'и';
            case 'second':
                if (this.lastLetter === 'е') {
                    return this.nounBase + 'я';
                }
                if (this.lastLetter === 'о') {
                    return this.nounBase + 'а';
                }
                return this.isExceptionHeterogeneous() ? this.nounBase + 'и' : this.noun + 'а';
            case 'third':
                return this.nounBase + 'и';
            case 'heterogeneous':
                return this.nounBase + 'ени';
            default:
                return this.noun;
        }
    };

    makeNounDative() {
        switch (this.defineDeclination()) {
            case 'first':
                return this.nounBase + 'е'
            case 'second':
                if (this.lastLetter === 'о') {
                    return this.nounBase + 'у';
                }
                if (this.lastLetter === 'е') {
                    return this.nounBase + 'ю';
                }
                if (this.lastLetter === 'ь') {
                    return this.nounBase + 'и'
                }
                return this.noun + 'у';
            case 'third':
                return this.nounBase + 'и';
            case 'heterogeneous':
                return this.nounBase + 'ени';
            default:
                return this.noun;
        }
    }

    makeNounAccusative() {
        switch (this.defineDeclination()) {
            case 'first':
                return this.lastLetter === 'а' ? this.nounBase + 'у' : this.nounBase + 'ю';
            case 'second':
            case 'third':
            case 'heterogeneous':
            default:
                return this.noun;
        }
    }

    makeNounAblative() {
        switch (this.defineDeclination()) {
            case 'first':
                return this.lastLetter === 'а' ? this.nounBase + 'ой' : this.nounBase + 'ей';
            case 'second':
                return this.lastLetter === 'о' ? this.nounBase + 'ом' : this.noun + 'ем';
            case 'third':
                return this.noun + 'ю'
            case 'heterogeneous':
                return this.nounBase + 'енем';
            default:
                return this.noun;
        }
    }

    makeNounPrepositional() {
        switch (this.defineDeclination()) {

            case 'first':
            case 'second':
                return this.isExceptionHeterogeneous() ? this.nounBase + 'и' : this.noun + 'е';
            case 'third':
                return this.nounBase + 'и';
            case 'heterogeneous':
                return this.nounBase + 'ени';
            default:
                return this.noun;
        }
    }

    isHeterogeneous() {
        const heterogeneous = [
            'бремя', 'время', 'вымя', 'знамя', 'имя', 'пламя', 'племя', 'семя', 'стремя', 'темя'
        ];
        return heterogeneous.indexOf(this.noun) >= 0;
    }

    isExceptionHeterogeneous() {
        return this.noun === 'путь'
    }

    isPopularIndeclinable() {
        const indeclinable = [
        'боа', 'бра', 'фейхоа', 'амплуа', 'буржуа',
        'манго', 'какао', 'кино', 'трюмо', 'пальто', 'бюро', 'танго', 'вето', 'бунгало', 'сабо', 'авокадо', 'депо',
        'зебу', 'кенгуру', 'рагу', 'какаду', 'рандеву', 'шоу',
        'шимпанзе', 'конферансье', 'атташе', 'колье', 'резюме', 'пенсне', 'кашне', 'протеже', 'коммюнике', 'драже', 'суфле', 'пюре', 'купе', 'фойе', 'шоссе',
        'такси', 'жалюзи', 'шасси', 'алиби', 'киви', 'иваси', 'регби', 'конфетти', 'колибри', 'жюри', 'пенальти', 'рефери', 'кольраби', 'пари',
        'каноэ', 'алоэ',
        'меню', 'парвеню', 'авеню', 'дежавю', 'инженю', 'барбекю', 'интервью', 'кофе'
        ];
        return indeclinable.indexOf(this.noun) >= 0;
    }
}

export default DeclineService;