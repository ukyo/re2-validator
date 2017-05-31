interface Re2Static {
    validate(s: string): boolean;
    ready: Promise<void>;
}

declare var re2: Re2Static;
export = re2;