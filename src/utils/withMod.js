import { createElement } from 'react';

/**
 * Функция обертка, которая позволяет создавать кастомные HOC'и, которые будут навешиваться в зависимости
 * от пришедшей модификации
 *
 * @param mod - объект с пришедшей модификацией
 * @param enhance - расширенный компонент
 * @returns {function(*=): function(...[*]=)}
 */
export const withMod = (
    mod,
    enhance,
) => {
    let modNames;

    return (
        WrappedComponent,
    ) => {
        let ModifiedComponent;

        return (props) => {
            modNames = modNames || Object.keys(mod);

            const isModifierMatched = modNames.every((key) => {
                const modValue = mod[key];
                const propValue = (props)[key];

                return modValue === propValue || (modValue === '*' && Boolean(propValue))
            });

            if (isModifierMatched) {
                if (enhance !== undefined) {
                    if (ModifiedComponent === undefined) {
                        ModifiedComponent = enhance(WrappedComponent)
                    }
                } else {
                    ModifiedComponent = WrappedComponent
                }

                return createElement(ModifiedComponent, props)
            }

            return createElement(WrappedComponent, props);
        };
    }
};
