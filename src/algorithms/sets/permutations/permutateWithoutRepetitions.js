export default function permutateWithoutRepetitions(options) {
    if(options.length === 1) {
        return [options];
    }

    // All permutations will be store into permutations array
    const permutations = [];

    // Get all permutations for all options excluding the first element
    const smallerOptions = permutateWithoutRepetitions(options.slice(1));

    // Insert first option into every possible position of every smaller permutation
    const firstOption = options[0];

    for(let optIndex = 0; optIndex < smallerOptions.length; optIndex +=1) {
        const smallerOption = smallerOptions[optIndex];

        // Insert first option into every possible position of smallerOption
        for(let positionIndex = 0; positionIndex <= smallerOption.length; positionIndex +=1 ) {
            const permutationPrefix = smallerOption.slice(0, positionIndex);
            const permutationSufix = smallerOption.slice(positionIndex);
            permutations.push(permutationPrefix.concat([firstOption], permutationSufix));
        }

    }

    return permutations;
}