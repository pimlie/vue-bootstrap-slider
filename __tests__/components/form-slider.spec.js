import {loadFixture, testVM, setData} from '../helpers';

describe('form-slider', async() => {
    beforeEach(loadFixture('form-slider'));
    testVM();

    it('has loaded bootstrap-slider', async () => {
        const {app: {$refs, $el}} = window;

        const slider = $refs.basic.$el.querySelector('.slider');
        expect(slider).not.toBeNull();
    });

    it('is correct type', async () => {
        const {app: {$refs, $el}} = window;

        const basic = $refs.basic.$el.querySelector('.slider');
        expect(basic).toHaveClass('slider-horizontal')
	
        const vertical = $refs.vertical.$el.querySelector('.slider');
        expect(vertical).toHaveClass('slider-vertical')

        const range = $refs.range.$el.querySelector('.max-slider-handle');
        expect(range).not.toHaveClass('hide')
    });

    it('should emit "input" event when changed', async () => {
        const {app: {$refs, $el}} = window;

	const vm = $refs.basic
        const spy = jest.fn()

        vm.$on('input', spy)
        await setData(app, 'basicValue', 33)

	expect(spy).toHaveBeenCalled();
    })

    it('should have ticks displayed', async () => {
        const {app: {$refs, $el}} = window;

        const vm = $refs.ticks

        const tickContainer = vm.$el.querySelector('.slider-tick-label-container')
        expect(tickContainer).not.toBeNull();
        expect(tickContainer.childNodes.length).toEqual(3);
    })
});
