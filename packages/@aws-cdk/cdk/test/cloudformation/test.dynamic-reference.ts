import { Test } from 'nodeunit';
import { DynamicReference, DynamicReferenceService, resolve, Stack } from '../../lib';

export = {
  'can create dynamic references with service and key with colons'(test: Test) {
    // GIVEN
    const stack = new Stack();

    // WHEN
    const ref = new DynamicReference(stack, 'Ref', {
      service: DynamicReferenceService.Ssm,
      referenceKey: 'a:b:c',
    });

    // THEN
    test.equal(resolve(ref.value), '{{resolve:ssm:a:b:c}}');

    test.done();
  },
};
