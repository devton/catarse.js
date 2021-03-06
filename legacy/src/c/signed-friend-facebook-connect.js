import m from 'mithril';
import _ from 'underscore';
import h from '../h';

const SignedFriendFacebookConnect = {
    controller: function(args) {
        const mapWithAvatar = () => _.sample(_.filter(args.friendListVM.collection(), item => !_.isNull(item.avatar)), 8);

        return {
            mapWithAvatar
        };
    },
    view: function(ctrl, args) {
        if (args.friendListVM.isLoading()) {
            return h.loader();
        }
        const total = args.friendListVM.total();
        return m('.w-section.section.bg-backs-carrosel.section-large', [
            m('.w-container', [
                m('.card.card-big', [
                    m('.w-row', [
                        m('.w-col.w-col-8', [
                            m('.fontsize-largest.u-marginbottom-20', 'Encontre projetos incríveis junto com seus amigos'),
                            m('.fontsize-small', 'O universo do Catarse junto com a sua rede do Facebook te farão descobrir projetos incríveis!')
                        ]),
                        m('.w-col.w-col-4.u-text-center', [
                            m('.fontsize-smallest.u-marginbottom-10', `${total} dos seus amigos estão no Catarse!`),
                            m('.u-marginbottom-20', [
                                _.map(ctrl.mapWithAvatar(), item => m(`img.thumb.small.u-round.u-marginbottom-10[src="${item.avatar}"]`)),
                            ]),
                                (total > 0 ? m('a.w-button.btn.btn-large[href="/follow-fb-friends"]', 'Procure seus amigos') : m('a.w-button.btn.btn-fb.btn-large.u-margintop-30.u-marginbottom-10[href="/connect-facebook"]', 'Conecte seu facebook'))
                        ])
                    ])
                ])
            ])
        ]);
    }
};

export default SignedFriendFacebookConnect;
