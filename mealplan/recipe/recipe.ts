type Tamount = [number, string]

type Tingredient = {
    ingredient: string, preparation: string, amount: Tamount | Tamount[]
}

type Tequipment = string

type Tgroup = {
    title: string,
    ingredients: Tingredient | Tingredient[]
}


// TODO add a time estimate to the recipe
export type Trecipe = {
    title: string,
    subtitle: string | null,
    miseEnPlace: (Tingredient | Tgroup)[]
    equipment?: Tequipment | Tequipment[]
    instructions: string | string[]
}