export class Clock
{
    id: number;
    tag: string;
    selected: boolean;
}

export interface IClockContainerView
{
    clocks: Clock[];
}

export class ClockContainerView
{
    clocks: Clock[];
}