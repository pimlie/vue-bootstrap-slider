import { loadFixture, testVM, setData } from '../helpers'

describe('form-slider', () => {
  beforeEach(loadFixture('form-slider'))
  testVM()

  it('has loaded bootstrap-slider', () => {
    const { app: { $refs } } = window

    const slider = $refs.basic.$el.querySelector('.slider')
    expect(slider).not.toBeNull()
  })

  it('is correct type', () => {
    const { app: { $refs } } = window

    const basic = $refs.basic.$el.querySelector('.slider')
    expect(basic).toHaveClass('slider-horizontal')

    const vertical = $refs.vertical.$el.querySelector('.slider')
    expect(vertical).toHaveClass('slider-vertical')

    const range = $refs.range.$el.querySelector('.max-slider-handle')
    expect(range).not.toHaveClass('hide')
  })

  it('should emit "input" event when changed', async () => {
    const { app } = window

    const vm = app.$refs.basic
    const spy = jest.fn()

    vm.$on('input', spy)
    vm.$on('change', spy)
    await setData(app, 'basicValue', 33)

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('emits "change" event after min / max changed', async () => {
    const { app } = window

    const vm = app.$refs.range
    const spy = jest.fn()

    vm.$on('change', spy)
    await setData(app, 'rangeValue', [33, 66])
    expect(spy).toHaveBeenCalledTimes(1)

    await setData(app, 'min', 25)
    await setData(app, 'max', 75)
    await setData(app, 'rangeValue', [33, 75])
    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should have ticks displayed', () => {
    const { app: { $refs } } = window

    const vm = $refs.ticks

    const tickContainer = vm.$el.querySelector('.slider-tick-label-container')
    expect(tickContainer).not.toBeNull()
    expect(tickContainer.childNodes.length).toEqual(3)
  })

  it('should display range highlights', () => {
    const { app: { $refs } } = window

    const vm = $refs.rangeHighlights

    let sliderTracks = vm.$el.querySelectorAll('.slider-track .primary-slider')
    expect(sliderTracks).not.toBeNull()
    expect(sliderTracks.length).toEqual(3)

    sliderTracks = vm.$el.querySelectorAll('.slider-track .secondary-slider')
    expect(sliderTracks).not.toBeNull()
    expect(sliderTracks.length).toEqual(2)
  })

  it('props are reactive', async () => {
    const { app } = window

    const vm = app.$refs.reactiveProps

    const sliderReactive = vm.$el.querySelectorAll('.tooltip-main')
    expect(sliderReactive).not.toBeNull()
    expect(window.getComputedStyle(sliderReactive[0]).left).toEqual('2%')

    await setData(app, 'max', 8)
    expect(window.getComputedStyle(sliderReactive[0]).left).toEqual('25%')
  })
})
